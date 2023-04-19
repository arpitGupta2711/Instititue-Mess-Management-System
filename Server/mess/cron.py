
# from django_cron import CronJobBase, Schedule
# from .models import *
# from .helpers import GetDayTime
# from django.contrib.auth.models import User
# from django.db.models.functions import Now
# from datetime import date
# class MyCronJob(CronJobBase):
#     RUN_AT_TIMES = ['10:50', '14:50', '23:15']
#     schedule = Schedule(run_at_times=RUN_AT_TIMES)
#     code = 'mess.my_cron_job'
#     def do(self):
#         day,time=GetDayTime()
#         users=User.objects.all()
#         for user in users:
#             leave=Leave.objects.filter(user=user,start_date__lt=Now(),end_date__gt=Now())
#             noteating=NotEatingToday.objects.filter(date = date.today(),time=time)
#             if not leave and not noteating:





