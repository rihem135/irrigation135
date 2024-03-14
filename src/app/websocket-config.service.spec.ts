import { TestBed } from '@angular/core/testing';

import { WebsocketConfigService } from './websocket-config.service';

describe('WebsocketConfigService', () => {
  let service: WebsocketConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebsocketConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
