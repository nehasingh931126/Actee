import {Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy} from '@angular/core';
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
  isOpened: boolean;
  options: ModalOptions;

  private readonly _subscription = new Subscription();

  constructor(
    private readonly _modalService: ModalService,
    private _cdr: ChangeDetectorRef
  ) {}
  ngOnInit(): void {
    this._subscription.add(
      this._modalService.onCreate.subscribe((res) => {
        console.log(res, 'here in the modal')
        if (res.create) {
          this.options = res.options;
          this.isOpened = true;
          this._cdr.markForCheck();
        } else {
          this.isOpened = false;
        }
      })
    );

    this._subscription.add(
      this._modalService.onClose.subscribe(() => {
        this.isOpened = false;
      })
    );
  }

  closeModal() {
    this._modalService.closeModal();
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }
}