from rest_framework import serializers
from .models import Menu,Feedback,Student



class MenuSerializer(serializers.ModelSerializer):
    class Meta:
        model=Menu
        fields=['day','time','meal','price']

class FeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model=Feedback
        fields='__all__'

class ViewFeedbackSerializer(serializers.ModelSerializer):
    FirstName=serializers.SerializerMethodField()
    LastName=serializers.SerializerMethodField()
    RollNo=serializers.SerializerMethodField()
    class Meta:
        model=Feedback
        fields=['message','rating','FirstName','LastName','date','RollNo']
    def get_FirstName(self,obj):
        student=Student.objects.get(user=obj.user)
        return student.FirstName
    def get_LastName(self,obj):
        student=Student.objects.get(user=obj.user)
        return student.LastName
    def get_RollNo(self,obj):
        student=Student.objects.get(user=obj.user)
        return student.rollNo


