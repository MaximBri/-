from django.contrib import admin

from matches.models import Place, Team, Tournament, Trainer, Player, Match


@admin.register(Place)
class PlaceAdmin(admin.ModelAdmin):
    pass


@admin.register(Team)
class TeamAdmin(admin.ModelAdmin):
    pass


@admin.register(Tournament)
class TournamentAdmin(admin.ModelAdmin):
    pass


@admin.register(Trainer)
class TrainerAdmin(admin.ModelAdmin):
    pass


@admin.register(Player)
class PlayerAdmin(admin.ModelAdmin):
    pass


@admin.register(Match)
class MatchAdmin(admin.ModelAdmin):
    pass
