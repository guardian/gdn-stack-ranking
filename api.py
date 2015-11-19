import webapp2
import jinja2
import os
import json
import logging
from urllib import quote, urlencode
import array

from google.appengine.api import urlfetch
from google.appengine.api import users

import umsgpack

import rankings
import headers

jinja_environment = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.join(os.path.dirname(__file__), "templates")))

class SubmitRanking(webapp2.RequestHandler):
	def put(self):
		user = users.get_current_user()

		logging.info(self.request.body)
		payload = json.loads(self.request.body)

		logging.info(payload)

		ranking_data = umsgpack.unpackb(array.array('B', payload["data"]).tostring())

		logging.info(ranking_data)

		new_ranking = rankings.create(user=user,
			name=ranking_data['name'],
			role=ranking_data['role'],
			grade=ranking_data['grade'],
			year=int(ranking_data['year']),
			quarter=int(ranking_data['quarter'])
			)

		headers.json(self.response)
		self.response.write(json.dumps(rankings.json(new_ranking)))

class LatestRankings(webapp2.RequestHandler):
	def get(self):
		user = users.get_current_user()

		logging.info(user)

		latest_rankings = rankings.latest(user)

		payload = {
			"latest_rankings": [rankings.json(ranking) for ranking in latest_rankings]
		}

		headers.json(self.response)
		self.response.write(json.dumps(payload))

app = webapp2.WSGIApplication([
	webapp2.Route(r'/api/ranking', handler=SubmitRanking),
	webapp2.Route(r'/api/latest-rankings', handler=LatestRankings),],
                              debug=True)