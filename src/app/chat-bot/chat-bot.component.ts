// refer the https://www.npmjs.com/package/speak-tts/v/2.0.4?activeTab=readme 
// refer the speak-tts npm package
import {Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import Speech from 'speak-tts'
import { IQuestions, IOptions } from '../models/chatflow.model'
import {ChatDataService} from '../services/chat-data.service'
declare var $:any;
@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.scss']
})
export class ChatBotComponent implements OnInit {

  @ViewChild('scrollMe') scroll: ElementRef;
  @ViewChildren('messageRef') messageRef: QueryList<any>;
  public chats: IQuestions[] = [];
  public questions: IQuestions[] = [];

  public dateTime = new Date();

  IndustryId: any;
  speech = new Speech()
  constructor(private _chatDataService:ChatDataService) { }

  ngOnInit() {
    $('#altGoalsBot').modal('show');
    this.getQuestions(0);
    this.speech.init(
      {}
    ).then((data) => {
        // The "data" object contains the list of available voices and the voice synthesis params
        // console.log("Speech is ready, voices are available", data)
        
    }).catch(e => {
        // console.error("An error occured while initializing : ", e)
    })

   
  }

  ngAfterViewInit() {
    this.scrollToBottom();
    this.messageRef.changes.subscribe(this.scrollToBottom);
  }

  private scrollToBottom = () => {
    try {
      this.scroll.nativeElement.scrollTop = this.scroll.nativeElement.scrollHeight;
    } catch (err) { }
  }

  ngOnChanges(): void {
      this.getQuestions(0);
  }

  private getQuestions(index:number) {
    const data=this._chatDataService.getNextQuestion(index);
    if(data){
      this.pushQuestion(data);
    } else{
      $('#altGoalsBot').modal('hide');
    }
  }


  public onOptionClick(option: IOptions, nextId:number, chatIndex: number) {
    const obj = {
      message: option.option,
      sender: 'YOU',
      options: [],
      date: new Date(),
    }
    this.chats.push(obj);
    this.getQuestions(nextId);
  }


  private pushQuestion(nextQuestion) {

    const obj: IQuestions = {
      message: nextQuestion.message,
      sender: 'CAM',
      options: nextQuestion.options,
      isLastQuestion:nextQuestion.isLastQuestion,
      date: new Date(),
    };
    this.chats.push(obj);
    
    this.speech.speak({
      text: nextQuestion.message,
      queue: false, // current speech will be interrupted,
      listeners: {
          onstart: () => {
              // console.log("Start utterance")
          },
          onend: () => {
              // console.log("End utterance")
            
          },
          onresume: () => {
              // console.log("Resume utterance")
          },
          onboundary: (event) => {
              // console.log(event.name + ' boundary reached after ' + event.elapsedTime + ' milliseconds.')
          }
      }
  }).then(() => {
      // console.log("Success !")
      if(nextQuestion.isLastQuestion == false){
        if (nextQuestion.options.length == 0) {
          setTimeout(() => {
            this.getQuestions(nextQuestion.id + 1);
            return;
          }, 5000);
        }
      }
  }).catch(e => {
      console.error("An error occurred :", e)
  })
  }
}
