

from django.contrib.auth.decorators import login_required
# from django.shortcuts import render
from django.shortcuts import render
from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from dj_rest_auth.registration.views import SocialLoginView
from allauth.socialaccount.providers.oauth2.client import OAuth2Client
from rest_framework_simplejwt.views import TokenRefreshView
from django.views.decorators.csrf import csrf_exempt
from django.conf import settings
from django.http import Http404
from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view,permission_classes
from rest_framework.response import Response
from .serializers import *
from .models import *
from django.db.models.functions import Now
from django.utils import timezone
from .helpers import GetDayTime

# class GoogleLogin(SocialLoginView):
#     authentication_classes = [] # disable authentication
#     adapter_class = GoogleOAuth2Adapter
#     callback_url = "http://localhost:3000/login"
#     client_class = OAuth2Client
    

# @csrf_exempt
# def google_token(request):
#     print (request.POST)
#     if "code" not in request.POST:
#         # print("hii")
#         from rest_framework_simplejwt.settings import api_settings as jwt_settings
#         from rest_framework_simplejwt.views import TokenRefreshView
        
#         class RefreshNuxtAuth(TokenRefreshView):
#             # By default, Nuxt auth accept and expect postfix "_token"
#             # while simple_jwt library doesnt accept nor expect that postfix
#             def post(self, request, *args, **kwargs):
#                 request.data._mutable = True
#                 request.data["refresh"] = request.data.get("refresh_token")
#                 request.data._mutable = False
#                 response = super().post(request, *args, **kwargs)
#                 response.data['refresh_token'] = response.data['refresh']
#                 response.data['access_token'] = response.data['access']
#                 return response

#         return RefreshNuxtAuth.as_view()(request)
#     else:
#         return GoogleLogin.as_view()(request)



@login_required
def test_view(request):
    return render(request, 'test.html')

@api_view(['GET'])
def home_view(request,*args,**kwargs):
    obj=Menu.objects.all()
    serializer=MenuSerializer(obj,many=True)
    return Response(serializer.data)

@api_view(['GET','POST'])
def update_menu(request,pk,*args, **kwargs):
    print(request.user)
    obj=Menu.objects.get(id=pk)
    if request.method == 'POST':
        # print(request.POST)
        print("data:", request.data)
        serializer=MenuSerializer(obj,data=request.data,partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors)
    else:
        serializer=MenuSerializer(obj)
        return Response(serializer.data)



@api_view(['POST'])
def giveFeedback(request,*args, **kwargs):
    serializer=FeedbackSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save(user=request.user)
        return Response(serializer.data)
    else:
        return Response(serializer.errors)


@api_view(['GET'])
def getFeedback(request,*args, **kwargs):
    obj=Feedback.objects.all()
    serializer=ViewFeedbackSerializer(obj,many=True)
    return Response(serializer.data)
    


@api_view(['GET','POST'])
def viewSilverToken(request,*args, **kwargs):
    if request.method=='POST':
        day=request.data['day']
        time=request.data['time']
        obj=Menu.objects.get(day=day,time=time)
        
        return Response({'order_value':obj.price})
    else:
        return Response({'status':200})


@api_view(['GET','POST'])
def viewSilverToken(request,*args, **kwargs):
    if request.method=='POST':
        day=request.data['day']
        time=request.data['time']
        obj=Menu.objects.get(day=day,time=time)
        
        return Response({'order_value':obj.price})
    else:
        return Response({'status':200})
    



@api_view(['GET','POST'])
def viewGoldToken(request,*args, **kwargs):
    if request.method=='POST':
        tokenCount=request.data['count']
        obj=GoldTokenPrice.objects.get(TokenCount=tokenCount)
        
        return Response({'token_count':obj.TokenCount,'order_value':obj.Price})
    else:
        return Response({'status':200})





@api_view(['GET'])
def ShowTokens(request,*args, **kwargs):
    obj=SilverToken.objects.filter(user=request.user,expiryTime__lt=Now())
    obj1=GoldToken.objects.get(user=request.user)
    print(obj,obj1)
    tokens={}
    tokens['silver']=SilverTokenSerializers(obj,many=True).data
    tokens['gold']=obj1.TokenCount
    return Response(tokens)

# @api_view(['GET'])
# def HaveToken(request,*args, **kwargs):
#     day,time=GetDayTime()
#     obj=NotEatingToday.objects.filter(user=request.user,day=day,time=time)
#     print(obj)
#     if obj:
#         return Response({"flag":False})
#     else:
#         obj1=SilverToken.objects.filter(user=request.user,expiryTime__lt=Now(),time=time,day=day)
#         obj2=GoldToken.objects.get(user=request.user)
#         if obj1:
#             return Response({"flag":True})
#         elif obj2.TokenCount>0:
#             return Response({"flag":True})
#         else:
#             return Response({"flag":False})


# @api_view(['GET'])
# def EatenToday(request,*args, **kwargs):
#     day,time=GetDayTime()
    
    

    
@api_view(['GET','POST'])
def NumberofPeople(request,*args, **kwargs):
    users=User.objects.all()
    day,time=GetDayTime()
    if request.method=='POST':
        day=request.data['day']
        time=request.data['time']
    cnt=0
    for user in users:
        try:
            obj=SilverToken.objects.get(user=user,time=time,day=day)
            obj1=GoldToken.objects.get(user=user)
            if obj:
                cnt+=1
            elif obj1.TokenCount>0:
                cnt+=1
        except:
            pass
    
    return Response({"StudentCount":cnt})





# @api_view(['GET','POST'])
# def checkSilverToken(request,*args, **kwargs):
#     obj = SilverToken.objects.filter(user=request.user)
#     if request.method == 'POST':
#         data = request.data
#         serializer=CheckSilverTokenSerializer(obj,data=data)
#         if serializer.is_valid():
#                 curr_date = timezone.now().date()
#                 tokenObj = SilverToken.objects.filter(user=data['user'], time=data['time'], day=data['day'])
#                 if tokenObj:
#                     if  tokenObj[0].expiryDate == curr_date:
#                         return Response({'status':'success'})
#                     else:
#                         print()
#                         return Response({'status':'failed'})
                    
#                 else:
#                     return Response({'status':'failed'})
#         else:  
#             return Response({'status':'failed'})
                      
#     else:
#         serializer=CheckSilverTokenSerializer(obj, many=True)
#         return Response(serializer.data)


# @api_view(['GET','POST'])
# def checkGoldToken(request,*args, **kwargs):
#     obj = GoldToken.objects.filter(user=request.user)
#     if request.method == 'POST':
#         data = request.data
#         serializer=CheckGoldTokenSerializer(obj,data=data, partial=True)
#         if serializer.is_valid():
#                 try: 
#                     tokenObj = GoldToken.objects.filter(user=data['user'], time=data['time'])
#                     if tokenObj:
#                         curr_date =timezone.now().date()
#                         if tokenObj[0].TokenCount>0 and tokenObj[0].TokenExpiry<=curr_date:
#                             tokenObj[0].TokenCount-=1
#                             tokenObj[0].save()
#                             return Response({'status':'success'})
#                     else:
#                         return Response({'status':'failed'})
#                 except:
#                         return Response({'status':'failed'})
                    
#         else:  
#             return Response({'status':'failed'})
                      
#     else:
#         serializer=CheckGoldTokenSerializer(obj, many=True)
#         return Response(serializer.data)


@api_view(['POST'])
def scanQr(request,*args, **kwargs):
    rollNo=request.POST.get('rollNo',None)
    if rollNo is None:
        return Response({'status':400,'error':'Roll Number not found'})
    user=User.objects.get(rollNo=rollNo.lower())
    # user=student.user
    day,time=GetDayTime()
    silverToken=SilverToken.objects.filter(user=user,day=day,time=time)
    if not silverToken:
        goldToken=GoldToken.objects.get(user=user)
        if goldToken.TokenCount>0:
            goldToken.TokenCount-=1
            goldToken.save()
            return Response({'status':200,'message':'Gold Token is Used'})
        return Response({'status':400,'message':'You don\'t have any token'})
    else:
        silverToken.delete()
        return Response({'status':200,'message':'Silver Token is Used'})
    



