import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnDestroy,
  ElementRef,


} from '@angular/core';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.component.html',
  styleUrls: ['./infinite-scroll.component.css']
})
export class InfiniteScrollComponent implements OnInit ,OnDestroy {
  @Input() threshold = 0;
  @Output() scrolled = new EventEmitter<void>();
  private observer!: IntersectionObserver;

  private subscription?: Subscription;

  constructor(private elementRef: ElementRef) {

  }

  ngOnInit() {


    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    this.observer = new IntersectionObserver(([entry]) => {

      if (entry.isIntersecting) {
        this.scrolled.emit();
      }
    }, options);

    this.observer.observe(this.elementRef.nativeElement);

  }

  ngOnDestroy() {
    this.observer.disconnect();
    this.subscription?.unsubscribe();

  }


}


