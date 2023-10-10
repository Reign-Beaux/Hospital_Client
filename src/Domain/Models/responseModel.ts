export interface ReponseModel<T> {
  isSuccess: boolean;
  message: string;
  data: T;
  errors: string[];
}

/*

        public bool IsSuccess { get; set; }
        public string Message { get; set; }
        public T Data { get; set; }
        public List<string> Errors { get; set; }

*/