#Dashboard

Create a generic home page for the user to be redirected to a broad scale of tournaments
- do we want to implement a search on the dashboard for the user to search tournaments
- do we want to create a personal customizing dashboard from here like a + button or star button to add tournaments by hand to personal dashboard


########################## MVP ####
#Admin
Create Board <form>
Create Teams <form>
Create Tournament <form>
Select teams to populate division <li>
REFEREE inputting results <form>
Assign Teams to A Division <form>


#User View/ Stretch Goal
Drop Down Menu/ Search Form

#Generic View
only sign-in to create tournament
general view shows all tournaments that you can filter through
each viewed tournament will be stored into local storage

#Resources
Tournament View Page: View/Fetch All Tournaments
//source https://stackoverflow.com/questions/45001916/how-to-get-and-display-all-child-list-from-firebase-react

On click of a Tournament, View Age/Boys/Girls/Team Rendered from Schema
https://stackoverflow.com/questions/46586656/reactjs-display-fetch-response-onclick

https://stackoverflow.com/questions/46586656/reactjs-display-fetch-response-onclick



#OverView For tournament view
1. Need to group division, classification, date and field data onto one {this.state.post} or something similar
2. Need to render in a unique ID for each tournament
3. Need to create onClick function that generates the tournament ID clicked, to its following options: division, classification, date and field (no unique ID)
4. Click classification to show divisions data and field
5. click division to show date and field!

Possibilities
make each <li>data</li> a link (style with on hover or something) that displays that data
Re-route onClick to show only that tournament and its children data options
onClick hide/show tournaments components

Create Component for each view




