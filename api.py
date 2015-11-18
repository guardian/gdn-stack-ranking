import webapp2
import jinja2
import os
import json
import logging
from urllib import quote, urlencode
import array

from google.appengine.api import urlfetch

import umsgpack

jinja_environment = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.join(os.path.dirname(__file__), "templates")))

class SubmitRanking(webapp2.RequestHandler):
	def put(self):
		logging.info(self.request.body)
		payload = json.loads(self.request.body)

		logging.info(payload)

		ranking_data = umsgpack.unpackb(array.array('B', payload["data"]).tostring())

		logging.info(ranking_data)

app = webapp2.WSGIApplication([
	webapp2.Route(r'/api/ranking', handler=SubmitRanking),],
                              debug=True)