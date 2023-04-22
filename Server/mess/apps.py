from django.apps import AppConfig
# from django_crontab import crontab

class MessConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'mess'
    def ready(self):
        pass
        # # Schedule the cron job to run at the specified times
        # crontab.cron_schedule = {
        #     'my_cron_job': {
        #         'task': 'my_app.tasks.Command',
        #         'schedule': {
        #             'minute': '6',
        #             'hour': '2,5,9,17',
        #         },
        #     },
        # }




