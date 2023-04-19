from django.db.models import signals
from django.contrib.auth.models import User
from django.dispatch import receiver
@receiver(signals.post_save,sender=User)
def create_profile(sender,instance,*args, **kwargs):
    if kwargs['created']:
        print(instance.email)
        # profile=Profile.objects.create(user=instance)
        # profile.save()