Design / Mock up an architecture to handle sport updates from a 3rd party provider(ideally using cloud technologies).
    a.HTTP is the transport method used by the third party to send message to us.
    b.The messages need to be entered into a database in order to query them for client use. 
    
    Example feed messages:
    - Event updates 
        - including changes of score / betting enabled or disabled
    - Odds updates 
        - updates for the odds available for the event


**I have attached the architecture diagram as scanned document**

The REST endpoints would be 

GET http://localhost:3000/betting/updates/event?hasBettingEnabled=true
GET http://localhost:3000/betting/updates/odd?hasBettingEnabled=true

GET http://localhost:3000/betting/updates/event?hasBettingEnabled=false
GET http://localhost:3000/betting/updates/odd?hasBettingEnabled=false


End user can access the event and odd updates with the query param of bettingEnabled or not.
