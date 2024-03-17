import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor() { }

  handleError(error: any): void {
    
    console.error('An error occurred:', error);
    
  }
}