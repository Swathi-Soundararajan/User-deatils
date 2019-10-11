import firebase_admin
from firebase_admin import credentials
from firebase_admin import db
from datetime import datetime
import re
#Firebase credentials
cred = credentials.Certificate("./user-profile-2259d-firebase-adminsdk-zp3e8-627bbdc8a0.json")
firebase_admin.initialize_app(cred,{
    'databaseURL':'https://user-details-8e0b5.firebaseio.com/'
})

# Methods to get various types of input
def getStrInput(field):
    while True:
        val = input(field)
        if(val.isalpha()):
            return val

def getDobInput(field):
    while True:
        try:
            val = input(field)
            datetime.strptime(val,"%d/%m/%Y")
            return val
        except:
            print("Pls enter in following format dd/mm/yyyy")
            continue

def getOptionInput(field,opt):
    while True:
        val = getStrInput(field)
        if val.lower() in opt:
            return val
        else:
            print("Valid options are",opt)
            continue 

def isValidEmail(email):
     regex = r"^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$" 
     if len(email) > 7:
        if re.match(regex, email) != None:
            return True
        return False

def getEmailInput(field):
    while True:
        val = input(field)
        if(isValidEmail(val)):
            return val

def getNumber(field):
    while True:
        val = input(field)
        if(val.isnumeric()):
            return val
        else:
            print("Pls enter valid input")

def getNumInput(field,size):
    while True:
        val = getNumber(field)
        if(len(val) == size):
            return val
        else:
            print("Please enter ",size," digits input")    

def getSplInput(field,splchar):
    while True:
        val = input(field)
        splitVal = val.split(splchar)
        isValid = False
        for value in splitVal:
            if(value.isalpha()):
                isValid = True
            else:
                isValid = False
        if(isValid):
            return val


#get input from the user 
print("Profile Details")
print("Pls enter the details for the following fields")

firstname = getSplInput("Enter your Firstname "," ")
lastname = getSplInput("Enter your Lastname "," ")
dob = getDobInput("Enter your Data of Birth (dd/mm/yyyy)")
gender = getOptionInput("Enter your Gender ",["male","female","other"])
fathername = getSplInput("Enter your Father Name "," ")
email = getEmailInput("Enter your email id ")
phone = getNumInput("Enter your Phone number ",10)
education = getSplInput("Enter your Highest Degree ",".")
college = getSplInput("Enter your School/College name "," ")
district = getSplInput("Enter your District "," ")
state = getSplInput("Enter your State "," ")
pincode = getNumInput("Enter your pincode ",6)
uid_value = getNumInput("Enter your aadhar number ",12)
skills = getSplInput("Enter your skills ",",")

userProfile = {
    "firstname":firstname,
    "lastname":lastname,
    "dob":dob,
    "gender":gender,
    "father":fathername,
    "email":email,
    "phone":phone,
    "education":education,
    "college":college,
    "state":state,
    "district":district,
    "pincode":pincode,
    "aadhar":uid_value,
    "skills":skills
}

print("Creating new Record")
#reference to the database
ref = db.reference('profiles')
#create a new record id
new_entry_ref = ref.push()
#store the value in record
new_entry_ref.update(userProfile)
print("New record inserted successfully")

