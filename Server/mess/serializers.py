from rest_framework import serializers
from .models import Menu,Feedback,Student, SilverToken, GoldToken



class MenuSerializer(serializers.ModelSerializer):
    class Meta:
        model=Menu
        fields=['day','time','meal']

class FeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model=Feedback
        fields='__all__'

class ViewFeedbackSerializer(serializers.ModelSerializer):
    FirstName=serializers.SerializerMethodField()
    LastName=serializers.SerializerMethodField()
    # RollNo=serializers.SerializerMethodField()
    class Meta:
        model=Feedback
        fields=['message','rating','FirstName','LastName','date']
    def get_FirstName(self,obj):
        student=Student.objects.get(user=obj.user)
        return student.FirstName
    def get_LastName(self,obj):
        student=Student.objects.get(user=obj.user)
        return student.LastName
    # def get_RollNo(self,obj):
    #     student=Student.objects.get(user=obj.user)
    #     return student.rollNo
    

class CheckSilverTokenSerializer(serializers.ModelSerializer):
    class Meta:
        model=SilverToken
        fields="__all__"


class CheckGoldTokenSerializer(serializers.ModelSerializer):
    class Meta:
        model=GoldToken
        fields="__all__"


class SilverTokenSerializers(serializers.ModelSerializer):
    class Meta:
        model=SilverToken
        fields=['tokenTime','tokenDate']



