import {EventEmitter, Injectable} from '@angular/core';

// export enum ModalType {
//     GAME_DESCRIPTION_MODAL  = 'GAME_DESCRIPTION_MODAL',
//     GAME_FITLER_MODAL = 'GAME_FILTER_MODAL'
// }

export interface ModalOptions {
  title: string;
  isSaveEnabled?: boolean;
  closeButton?: boolean;
  addtionalInformation?: any;
}

@Injectable({
  providedIn: 'root',
})
export class ModalService {

  onCreate = new EventEmitter<{ create: boolean; options?: ModalOptions }>();
  onSave = new EventEmitter<boolean>();
  onClose = new EventEmitter();
  //private modalType = ModalType;
  _options: ModalOptions;

  create(title?: string, isSaveEnabled?:boolean, isCloseEnabled?: boolean, addtionalInformation?: any) {
    this._options = {
      title : title ?? '',
      isSaveEnabled: isSaveEnabled ?? false,
      closeButton: isCloseEnabled ?? false
    };
    
    this.onCreate.emit({create: true, options: this._options});
  }

  destroy(): void {
    this.onCreate.emit({create: false})
  }

  confirmSaving(res:boolean): void {
    this.onSave.emit(res);
  }

  closeModal(): void {
    this.onClose.emit();
  }
}