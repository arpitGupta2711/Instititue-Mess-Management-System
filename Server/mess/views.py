from django.shortcuts import render
from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from dj_rest_auth.registration.views import SocialLoginView
from allauth.socialaccount.providers.oauth2.client import OAuth2Client
from django.conf import settings
from django.http import Http404
from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view,permission_classes
from rest_framework.response import Response
from .serializers import MenuSerializer,FeedbackSerializer,ViewFeedbackSerializer, CheckSilverTokenSerializer, CheckGoldTokenSerializer
from .models import Menu,Feedback, SilverToken, GoldToken
from django.utils import timezone
from django.http import JsonResponse
class GoogleLogin(SocialLoginView):
    authentication_classes = [] # disable authentication
    adapter_class = GoogleOAuth2Adapter
    callback_url = "http://localhost:3000"
    client_class = OAuth2Client
    


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



@api_view(['GET','POST'])
def giveFeedback(request,*args, **kwargs):
    serializer=FeedbackSerializer(data=request.data)
    if request.method == 'POST':
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data)
        else:
            return Response(serializer.errors)
    return []


@api_view(['GET'])
def getFeedback(request,*args, **kwargs):
    obj=Feedback.objects.all()
    serializer=ViewFeedbackSerializer(obj,many=True)
    return Response(serializer.data)
    

@api_view(['GET','POST'])
def checkSilverToken(request,*args, **kwargs):
    obj = SilverToken.objects.filter(user=request.user)
    if request.method == 'POST':
        data = request.data
        serializer=CheckSilverTokenSerializer(obj,data=data)
        if serializer.is_valid():
                curr_date = timezone.now().date()
                tokenObj = SilverToken.objects.filter(user=data['user'], time=data['time'], day=data['day'])
                if tokenObj:
                    if  tokenObj[0].expiryDate == curr_date:
                        return Response({'status':'success'})
                    else:
                        print()
                        return Response({'status':'failed'})
                    
                else:
                    return Response({'status':'failed'})
        else:  
            return Response({'status':'failed'})
                      
    else:
        serializer=CheckSilverTokenSerializer(obj, many=True)
        return Response(serializer.data)


@api_view(['GET','POST'])
def checkGoldToken(request,*args, **kwargs):
    obj = GoldToken.objects.filter(user=request.user)
    if request.method == 'POST':
        data = request.data
        serializer=CheckGoldTokenSerializer(obj,data=data, partial=True)
        if serializer.is_valid():
                try: 
                    tokenObj = GoldToken.objects.filter(user=data['user'], time=data['time'])
                    if tokenObj:
                        curr_date =timezone.now().date()
                        if tokenObj[0].TokenCount>0 and tokenObj[0].TokenExpiry<=curr_date:
                            tokenObj[0].TokenCount-=1
                            tokenObj[0].save()
                            return Response({'status':'success'})
                    else:
                        return Response({'status':'failed'})
                except:
                        return Response({'status':'failed'})
                    
        else:  
            return Response({'status':'failed'})
                      
    else:
        serializer=CheckGoldTokenSerializer(obj, many=True)
        return Response(serializer.data)


