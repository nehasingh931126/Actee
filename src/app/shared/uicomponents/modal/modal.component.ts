import {
  Component,
  OnInit,
  Input, ViewEncapsulation,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  OnDestroy,
} from '@angular/core';
import { Subscription } from 'rxjs';

import { ModalOptions, ModalService } from './modal.service';


@Component({
  selector: 'actee-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalComponent implements OnInit, OnDestroy {
  isOpened: boolean = false;
  options: ModalOptions;

  private readonly _subscription = new Subscription();

  constructor(
    private readonly _modalService: ModalService,
    private _cdr: ChangeDetectorRef
  ) {}
  ngOnInit(): void {
    this._subscription.add(
      this._modalService.onCreate.subscribe((res) => {
        if (res.create) {
          this.options = res.options;
          this.isOpened = true;
        } else {
          this.isOpened = false;
        }
        this._cdr.markForCheck();
      })
    );

    this._subscription.add(
      this._modalService.onClose.subscribe(() => {
        this.isOpened = false;
      })
    );
  }

  closeModal(event) {
    if (event.target === event.currentTarget) {
      this._modalService.closeModal();
    }
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }
}