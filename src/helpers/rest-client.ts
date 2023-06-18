//HttpResponse provides header information etc.
interface HttpResponse<T> extends Response {
  paresedBody?: T
}

class HttpClient {
  private async callRestApi<T>(request: RequestInfo): Promise<HttpResponse<T>> {
    const response: HttpResponse<T> = await fetch(request)
    try {
      // may error if there is no body
      response.paresedBody = await response.json()
      console.log('HttpClient.http(): Got a response')
    } catch (ex) {
      console.log('Catch Ex:' + ex)
    }

    if (!response.ok) {
      throw new Error(response.statusText)
    }
    return response
  }

  async post<T>(
    path: string,
    body: any, //
    args: RequestInit = { method: 'POST', body: JSON.stringify(body), headers: { 'Content-Type': 'application/json' } }
  ): Promise<HttpResponse<T>> {
    return await this.callRestApi<T>(new Request(path, args))
  } //post

  async get<T>(path: string, args: RequestInit = { method: 'GET' }): Promise<HttpResponse<T>> {
    return await this.callRestApi<T>(new Request(path, args))
  } //get

  async put<T>(
    path: string,
    body: any,
    args: RequestInit = { method: 'PUT', body: JSON.stringify(body) }
  ): Promise<HttpResponse<T>> {
    return await this.callRestApi<T>(new Request(path, args))
  } //put
} //class HttpClient

//The class is not Generic, but methods are. As at this point of use, there is no enough info to make a genetic instance for runtime.
export const RestClient = new HttpClient()
