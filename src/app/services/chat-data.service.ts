import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatDataService {
  constructor() { }
  chatbot = [
            {
                "message": "Hello Nirali! As we complete your portal setup, we want to make sure you have as many resources available to you as possible to help you reach your goals. We work with lots of professionals that are the very best at what they do.",
                "id": 0,
                "isLastQuestion": false,
                "sender": "CAM",
                "AffiliateType": [],
                "options": []
            },
            {
                "message": "Depending on what your needs are we will put recommendations for a few of these professionals in the Teams section of your portal. We will not share any of your personal information with them unless you ask us to.",
                "id": 1,
                "isLastQuestion": false,
                "sender": "CAM",
                "AffiliateType": [],
                "options": []
            },
            {
                "message": "Since we are on the topic of your privacy, You were referred to use your profile. Would you like us to share your information with admin  and their company so everyone can be ready when you are?",
                "id": 2,
                "isLastQuestion": false,
                "sender": "CAM",
                "options": [
                    {
                        "option": "Yes",
                        "next": 3,
                        "PortalUpdate": 0,
                        "AltGoalId": "0"
                    },
                    {
                        "option": "No",
                        "next": 3,
                        "PortalUpdate": 3,
                        "AltGoalId": "0"
                    }
                ],
            },
            {
                "message": "Congratulations on setting a goal of buying a home. That's our goal for you too. Because it takes a lot to buy a home, we want to make sure nothing is holding you back.",
                "id": 3,
                "isLastQuestion": false,
                "sender": "CAM",
                "AffiliateType": [],
                "options": []
            },
            {
                "message": "Do you suspect you will have to move into a different apartment before you're ready to buy your new home?",
                "id": 4,
                "AffiliateType": [],
                "isLastQuestion": false,
                "sender": "CAM",
                "options": [
                    {
                        "option": "Yes",
                        "next": 5,
                        "AltGoalId": "3",
                        "PortalUpdate": 0
                    },
                    {
                        "option": "No",
                        "next": 5,
                        "AltGoalId": "0",
                        "PortalUpdate": 0
                    }
                ],
            },
            {
                "message": "Do you plan on buying a car in the next six months?",
                "id": 5,
                "AffiliateType": [],
                "isLastQuestion": false,
                "sender": "CAM",
                "options": [
                    {
                        "option": "Yes",
                        "next": 6,
                        "AltGoalId": "1",
                        "PortalUpdate": 0
                    },
                    {
                        "option": "No",
                        "next": 6,
                        "AltGoalId": "0",
                        "PortalUpdate": 0
                    }
                ],
            },
            {
                "message": "Do you have a any Question? (don’t worry, no one is going to call you unless you ask for a call)",
                "id": 6,
                "AffiliateType": [],
                "isLastQuestion": false,
                "sender": "CAM",
                "options": [
                    {
                        "option": "Yes",
                        "next": 7,
                        "AltGoalId": "5",
                        "PortalUpdate": 0
                    },
                    {
                        "option": "No",
                        "next": 7,
                        "AltGoalId": "0",
                        "PortalUpdate": 0
                    }
                ],
            },
            {
                "message": "Thank you! Now we will review your answers and will recommend the best team for everything you need.",
                "id": 7,
                "AffiliateType": [],
                "isLastQuestion": true,
                "sender": "CAM",
                "options": []
            }
  ]
    


  public getNextQuestion(index:number) {
     return this.chatbot[index];
  }
}
