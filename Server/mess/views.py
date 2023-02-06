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
from .serializers import MenuSerializer,FeedbackSerializer,ViewFeedbackSerializer
from .models import Menu,Feedback
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
    obj=Menu.objects.get(id=pk)
    if request.method == 'POST':
        # print(request.POST)
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
    