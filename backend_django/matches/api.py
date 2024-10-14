from ninja import Router
from typing import List
from datetime import datetime, timedelta
from .models import Match
from .schemas import MatchSchema

router = Router()


@router.get("/matches", response=List[MatchSchema])
def get_all_matches(request):
    return Match.objects.all()


@router.get("/matches/half-year", response=List[MatchSchema])
def get_half_year_matches(request):
    now = datetime.now()
    three_months_ago = now - timedelta(days=90)
    three_months_ahead = now + timedelta(days=90)
    return Match.objects.filter(play_time__range=(three_months_ago, three_months_ahead))


@router.get("/matches/year", response=List[MatchSchema])
def get_year_matches(request):
    now = datetime.now()
    six_months_ago = now - timedelta(days=180)
    six_months_ahead = now + timedelta(days=180)
    return Match.objects.filter(play_time__range=(six_months_ago, six_months_ahead))


@router.get("/matches/current_month", response=List[MatchSchema])
def get_current_month_matches(request):
    now = datetime.now()
    start_of_month = now.replace(day=1)
    next_month = (start_of_month + timedelta(days=32)).replace(day=1)
    return Match.objects.filter(play_time__range=(start_of_month, next_month))


@router.get("/matches/current_year", response=List[MatchSchema])
def get_current_year_matches(request):
    now = datetime.now()
    start_of_year = now.replace(month=1, day=1)
    next_year = (start_of_year.replace(year=start_of_year.year + 1))
    return Match.objects.filter(play_time__range=(start_of_year, next_year))


