import models

def create(user, name, role, year, quarter, grade):
	new_ranking = models.Ranking(user=user,
		name=name,
		role=role,
		year=year,
		quarter=quarter,
		grade=grade)
	new_ranking.put()
	return new_ranking

def latest(user):

	return models.Ranking.query().filter(models.Ranking.user == user)

def json(ranking):
	return {
		"url_key": ranking.key.urlsafe(),
		"name": ranking.name,
		"role": ranking.role,
	}