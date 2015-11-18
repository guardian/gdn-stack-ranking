import models

def create(user, name, job_title, year, quarter, grade):
	new_ranking = models.Ranking(user=user, job_title=job_title, year=year, quarter=quarter, grade=grade)
	new_ranking.put()
	return new_ranking

def latest_rankings(user):

	return models.Ranking.query().filter(models.Ranking.user == user)
