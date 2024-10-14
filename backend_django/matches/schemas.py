from ninja import Schema
from datetime import datetime


class PlaceSchema(Schema):
    id: int
    location: str
    city: str
    country: str


class TeamSchema(Schema):
    id: int
    title: str


class TournamentSchema(Schema):
    id: int
    title: str


class MatchSchema(Schema):
    id: int
    tournament: TournamentSchema = None
    team_one: TeamSchema = None
    team_two: TeamSchema = None
    team_one_score: int
    team_two_score: int
    place: PlaceSchema = None
    play_time: datetime
