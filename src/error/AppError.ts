class AppError {
  error: string;
  statusCode: number;

  constructor(error: string, statusCode?: number) {
    this.error = error;
    this.statusCode = statusCode || 400;
  }
}

export { AppError };
