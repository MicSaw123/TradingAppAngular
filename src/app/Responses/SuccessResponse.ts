export class SuccessResponseBase {
  IsSuccessful: boolean;
  CompletedAt: Date;

  constructor() {
    this.IsSuccessful = true;
    this.CompletedAt = new Date();
  }

  static CreateBaseResponse() : SuccessResponseBase {
    return new SuccessResponseBase();
  }
}

export class SuccessResponse<T> extends SuccessResponseBase{
  result: T;

  constructor(result: T) {
    super();
    this.result = result;
  }

  static CreateResponse<T>(result: T): SuccessResponse<T> {
    return new SuccessResponse<T>(result);
  }
}
