from django.db import models


class Place(models.Model):
    location = models.CharField(verbose_name='Стадион', max_length=150)
    city = models.CharField(verbose_name='Город', max_length=150)
    country = models.CharField(verbose_name='Страна', max_length=150)

    class Meta:
        verbose_name = 'Место проведения встречи'
        verbose_name_plural = 'Места проведения встреч'

    def __str__(self):
        return self.location


class Team(models.Model):
    title = models.CharField(verbose_name='Название', max_length=150)

    class Meta:
        verbose_name = 'Команда'
        verbose_name_plural = 'Команды'

    def __str__(self):
        return self.title


class Tournament(models.Model):
    title = models.CharField(verbose_name='Наименование соревнования', max_length=150)

    class Meta:
        verbose_name = 'Соревнование'
        verbose_name_plural = 'Соревнования'

    def __str__(self):
        return self.title


class Trainer(models.Model):
    name = models.CharField('Имя', max_length=150)
    team = models.ForeignKey(
        Team,
        verbose_name='Команда',
        on_delete=models.CASCADE,
        related_name='trainers',
        blank=True,
        null=True
    )

    class Meta:
        verbose_name = 'Тренер'
        verbose_name_plural = 'Тренера'

    def __str__(self):
        return self.name


class Player(models.Model):
    name = models.CharField('Имя', max_length=150)
    ROLE_CHOICES = [
        ('Goalkeeper', 'Вратарь'),
        ('Defender', 'Защитник'),
        ('Midfielder', 'Полузащитник'),
        ('Forward', 'Нападающий'),
    ]
    role = models.CharField(
        verbose_name='Роль',
        max_length=50,
        choices=ROLE_CHOICES,
        db_index=True
    )
    number = models.IntegerField(verbose_name='Номер')
    team = models.ForeignKey(
        Team,
        verbose_name='Команда',
        on_delete=models.CASCADE,
        related_name='players',
        blank=True,
        null=True
    )
    status = models.BooleanField('Статус', default=True)

    class Meta:
        verbose_name = 'Игрок'
        verbose_name_plural = 'Игроки'

    def __str__(self):
        return self.name


class Match(models.Model):
    tournament = models.ForeignKey(
        Tournament,
        verbose_name='Наименования соревнования',
        on_delete=models.CASCADE,
        related_name='matches',
        blank=True,
        null=True
    )
    team_one = models.ForeignKey(
        Team,
        verbose_name='Команда 1',
        on_delete=models.CASCADE,
        related_name='matches_team_one',
        blank=True,
        null=True
    ),
    team_two = models.ForeignKey(
        Team,
        verbose_name='Команда 2',
        on_delete=models.CASCADE,
        related_name='matches_team_two',
        blank=True,
        null=True
    ),
    team_one_score = models.IntegerField(verbose_name="Счет команды 1", default=0)
    team_two_score = models.IntegerField(verbose_name="Счет команды 2", default=0)
    place = models.ForeignKey(
        Place,
        verbose_name='Место проведения',
        on_delete=models.CASCADE,
        related_name='matches',
        blank=True,
        null=True
    )

    play_time = models.DateTimeField(
        verbose_name='Дата и время провередния встречи',
        blank=True,
        null=True
    )

    class Meta:
        verbose_name = 'Матч'
        verbose_name_plural = 'Матчи'

    def __str__(self):
        return f'{self.team_one}:{self.team_two}'
