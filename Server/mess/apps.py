from django.apps import AppConfig


class MessConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'mess'
    def ready(self):
        import mess.signals




