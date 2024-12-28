Airline Backend System 



Objective - 

We need to build a backend system that can support different features for an airline company . our end user is going to be someone who wants to book flights and query about flights so we need a robust system to actually help them give the best experience possible . this doc is solely going to focus on the backend part of the system . Qe want to prepare the whole backend keeping the fact in mind that the code base should be mainintable as possible . 


PRD Doc - generally given by product manager . 

Requirements ; 
Functional and non functional requirements 
A user should be able to search the flights from one place to another 
- User should be able to mention the souce and destination details . 
- User shold be able to put date 
    -  [V2 later] User should be able to search for return flights and multi city flights 
- User should be able to select the class of the flights
- user should be able to select the number of seats can book . 
- Now based on the above data we should be able to list down the flights . 
- we should show our users the best available flights at top based on time period anof flight and then based on the price . 
- we need to support pagination so that we can list chunk of flights at one point of time 
- We should be support filter of flights based on Price , departure time ,Duration , Airline stops 
  - [V2 ] we can add support for more filters  


A user should be able to book a flight considering that user is registered on the platform  
 - User should be able to cancel the booking , and then based on some criteria we can initiate a dummy refund  thing.
- Usershould be able to request and book excess luggage for every flight . 
For making  a booking the user has to amek a payment [dummy]. We can use third party payment gateway ex = razorpay etc . 
Tracking flight prices should be possible , the user shoube be notifiled about any price drops . 
User should be able to list their previous and upcoming flights 
User should be able to download boarding pass if they have done online check in 
Online check in mechanism should be supported 
Noticification via email for completing online check in before 3 hours of departure 
Notification to user about any flight delay 
User should be able to review the flight journey if and only if they have boked a flight 
 - Review mechanism should involve start rating along with a comment 
- While listing any flight wew shold also display the review of the flight 
User should be able to authenticte to our system using email and password 
- [V2] Support ticketing , where user can raise their queries 
-[V2] should select seat

COupan for discount and offers 
While making a booking a person can reserve more than one seats with one login id 


Non Functional Requirements : 
In high level we have to approximate these things . 

We can expect that we are going to have more flight searches than flight bookings . 
The system needs to be accurate in terms of booking .
Expect that we will be having approx 1 lakh users. Or 2 lakh users rough sketch but baad me jyada bhi ja skta he we dont’ know 
So in one quarter we can exprect 2000 bookings in one day 
If things go beyond then they have to architecture the things . 
System should be capable of scaling up to at least 3x the current estimated traffic 
The systems should handle real time updates to flight prices , before prices , beefore user make the final booking . 
Concurrency should be handles , using rdbms shoube be the good solution .

Capacity estimation ; 
Storage estimates -
 - For upcoming 5 years , 40 lakh booking 2 lakh* 5 years  , 2 lakh users, Considering all the users records and booking records take 10 mb of data then overall 
40 lakh * 10 mb = 4 crore  then mb to Gb so 50 gb storage we need but for more safety 1 tb database will be fine 
1 Tb of memory should be fine for our initial pilot run . 

Traffic estimates - 
If we consider 5:1 as the search :booking ratio , then at max we expect 10000 search queries a day .  1 sec = 10,000/(24*60*60) = 0.116 query per sec
That thing doesnot giving good amount of query per second so sanket changed here 
Booking number 
Expect that we will be having approx 1 lakh users. Or 10 lakh users rough sketch but baad me jyada bhi ja skta he we dont’ know 
In one day we can expect 10,000 bookings 
If 10 lakh booking in a quarter then in a year we will have 40 lakh booking then in five year 2 croore bookings

Storage estimates -
 - For upcoming 5 years , 2crore bookings , size estimation - 2 crore * 10 mb to gb to tb 
200tb will be require . 
If 5 lakh booking then 10 tb of memory required   

Traffic estimates - 
10: 1 
5000 booking in a day that means 50,000 queryeis 
50,000/(24* 3600) = 1 query / s.


S 

Bandwidth requirement - we don’t require here 




High level diagram prepare krenge ab hum 
. 


If hum only ek app server par redirect kar rhe to fir wo ek monolith architecture ho jata he. 
That’s why we get microservice architecture 
Patterns - 
That repeats in software felid too it repeats . Ex ..MVC architecture . 


In our project , notification service , messaging , booking service exist microservice good for scalable thing

Inbetwen manny things happen today 





sitting -2 