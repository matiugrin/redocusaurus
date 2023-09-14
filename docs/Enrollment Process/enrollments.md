---
title: Introduction
---

# Introduction

The process to send an enrollment to OpsAdmin can be divided in two major steps, obtain the available plans from OpsAdmin, and post the enrollment data. Below is the basic process to post enrollments:

### 1. Obtain plan data in real time:​
1. [#Get a list of utilities](/redocusaurus/api#tag/Utilities): Obtain the list of utilities with active plans and the associated zipcodes
2. [#Get a list of plans for web enrollments](http://localhost:3000/): Get all the active plans.
3. [#Get extended information for a single plan](http://localhost:3000/): Get the requirements to enroll a customer and extra information for a single plan.

### 2. ...or obtain plan data batch to store locally:
1. [#Get Plans Batch For Wizard](http://localhost:3000/): Get all active plan with extra utility and customer type information.
2. [#Get Plan Zip Codes](http://localhost:3000/): Get the zipcodes of a single plan

### 3. Validate customer and address information. 
All these methods are optional and the validations will be made when creating the enrollment. These methods are published to help improve the customer experience:​
1. [#Get ESIID associated to an address](http://localhost:3000/): Only for Texas market. Get the ESIID associated to the indicated address.​
2. [#Validate if the ESIID and address match](http://localhost:3000/): Only for Texas market. Validate if the ESIID and address match.​
3. [#Validate if account number is active](http://localhost:3000/): Validates if the indicated account number (LCD / ESIID) is currently active in the plan utility.​
4. [#Get the customer credit score](http://localhost:3000/): Only for markets that require a deposit. This method returns the information provided by Transunion regarding the Credit Score and Fraud information if available. It also returns the decisions taken based on the business rules configured in OpsAdmin, for example, if a deposit is required or the information looks fraudulent.

### 4. Post enrollment:​
1. [#Create a new enrollment](http://localhost:3000/): Create a new enrollment. For markets without payment the process ends here
2. [#Get the URL with the payment form](http://localhost:3000/): Returns the URL with the payment gateway to complete the enrollment process when needed.