from google.appengine.ext import ndb

class Configuration(ndb.Model):
	key = ndb.StringProperty(required=True)
	value = ndb.StringProperty(required=True)

class Ranking(ndb.Model):
	name = ndb.StringProperty(required=True)
	role = ndb.StringProperty(required=True)
	year = ndb.IntegerProperty(required=True)
	quarter = ndb.IntegerProperty(required=True)
	grade = ndb.StringProperty(required=True)
	user = ndb.UserProperty(required=True)
	created_on = ndb.DateTimeProperty(auto_now_add=True)
	updated_on = ndb.DateTimeProperty(auto_now=True)