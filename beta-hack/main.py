#!/usr/bin/env python
#
# Copyright 2007 Google Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#

import 	os
import 	jinja2
import 	webapp2
import 	sys
import	urllib2
import  re
from 	xml.dom import 	minidom
from 	string  import 	letters	 

from google.appengine.ext import db

from google.appengine.ext import db

template_dir=os.path.join(os.path.dirname(__file__),"Templates")
jinja_env=jinja2.Environment(loader=jinja2.FileSystemLoader("Templates"),autoescape=True)

IP_URL="http://api.hostip.info/?ip="
def ger_coords(ip):
	url=  IP_URL + ip
	
EMAIL_RE  = re.compile(r'^[\S]+@[\S]+\.[\S]+$')
def valid_email(email):
    return not email or EMAIL_RE.match(email)
    
class MainHandler(webapp2.RequestHandler):
		
	def write(self,*a,**kw):
			self.response.out.write(*a,**kw)
			
	def render_str(self,template,**params):
		t=jinja_env.get_template(template)
		return t.render(params)
		
	def render(self,template, **kw):
		self.write(self.render_str(template,**kw))
			
class Home(MainHandler):

	def render_home(self,title=""):
			self.render("launcher.html")
			
	def get(self):
    		self.render_home()
    		
	def post(self): 
		self.render_home()

class Admin(MainHandler):

	def render_home(self,title=""):
			self.render("test.html")
			
	def get(self):
    		self.render_home()
    		
	def post(self): 
		self.render_home()
		

                    
app = webapp2.WSGIApplication([ ('/', Home), ('/admin', Admin) ], debug=True) 


