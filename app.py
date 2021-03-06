import webapp2
import jinja2
import os
import json
import logging
from urllib import quote, urlencode
from google.appengine.api import urlfetch

jinja_environment = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.join(os.path.dirname(__file__), "templates")))

class FrontPage(webapp2.RequestHandler):
	def get(self):
		template = jinja_environment.get_template('index.html')
		
		template_values = {}

		self.response.out.write(template.render(template_values))

class HomePage(webapp2.RequestHandler):
	def get(self):
		template = jinja_environment.get_template('home.html')
		
		template_values = {}

		self.response.out.write(template.render(template_values))

app = webapp2.WSGIApplication([
	webapp2.Route(r'/', handler=FrontPage),
	webapp2.Route(r'/home', handler=HomePage),],
                              debug=True)