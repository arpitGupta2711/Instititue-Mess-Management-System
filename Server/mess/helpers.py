from django.utils import timezone
def GetDayTime():
    day=timezone.now().weekday()
    time1=timezone.now().hour
    if time1<11:
        time=0
    elif time<3:
        time=1
    else:
        time=2
    return day,time
