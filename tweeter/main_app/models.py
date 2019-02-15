from django.db import models


class User(models.Model):
    id = models.AutoField(db_column='ID', primary_key=True)  # Field name made lowercase.
    username = models.CharField(db_column='USERNAME', max_length=45)  # Field name made lowercase.
    email = models.CharField(db_column='EMAIL', max_length=100)  # Field name made lowercase.
    password = models.CharField(db_column='PASSWORD', max_length=45)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'USER'


class Follow(models.Model):
    user = models.ForeignKey('USER', models.DO_NOTHING, db_column='USER_ID')  # Field name made lowercase.
    follow_id = models.IntegerField(db_column='FOLLOW_ID')  # Field name made lowercase.
    is_following = models.CharField(db_column='IS_FOLLOWING', max_length=1)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'FOLLOW'


class Likes(models.Model):
    tweet = models.ForeignKey('TWEET', models.DO_NOTHING, db_column='TWEET_ID')  # Field name made lowercase.
    user = models.ForeignKey('USER', models.DO_NOTHING, db_column='USER_ID')  # Field name made lowercase.
    timestamp = models.DateTimeField(db_column='TIMESTAMP')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'LIKES'


class Tweet(models.Model):
    id = models.AutoField(db_column='ID', primary_key=True)  # Field name made lowercase.
    user = models.ForeignKey('USER', models.DO_NOTHING, db_column='USER_ID')  # Field name made lowercase.
    content = models.CharField(db_column='CONTENT', max_length=45)  # Field name made lowercase.
    timestamp = models.DateTimeField(db_column='TIMESTAMP')  # Field name made lowercase.
    like_counter = models.IntegerField(db_column='LIKE_COUNTER')  # Field name made lowercase.
    parent_tweet = models.ForeignKey('self', models.DO_NOTHING, db_column='PARENT_TWEET', blank=True, null=True)  # Field name made lowercase.True

    class Meta:
        managed = False
        db_table = 'TWEET'
