# NotesWebApi.NoteApiApi

All URIs are relative to *https://localhost:7062*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteNote**](NoteApiApi.md#deleteNote) | **DELETE** /notes/{id} | 
[**getNote**](NoteApiApi.md#getNote) | **GET** /notes/{id} | 
[**notesGet**](NoteApiApi.md#notesGet) | **GET** /notes | 
[**notesPost**](NoteApiApi.md#notesPost) | **POST** /notes | 
[**updateNote**](NoteApiApi.md#updateNote) | **PUT** /notes | 



## deleteNote

> deleteNote(id)



### Example

```javascript
import NotesWebApi from 'notes_web_api';

let apiInstance = new NotesWebApi.NoteApiApi();
let id = 56; // Number | 
apiInstance.deleteNote(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## getNote

> Note getNote(id)



### Example

```javascript
import NotesWebApi from 'notes_web_api';

let apiInstance = new NotesWebApi.NoteApiApi();
let id = 56; // Number | 
apiInstance.getNote(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**Note**](Note.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## notesGet

> [Note] notesGet()



### Example

```javascript
import NotesWebApi from 'notes_web_api';

let apiInstance = new NotesWebApi.NoteApiApi();
apiInstance.notesGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Note]**](Note.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## notesPost

> Note notesPost(opts)



### Example

```javascript
import NotesWebApi from 'notes_web_api';

let apiInstance = new NotesWebApi.NoteApiApi();
let opts = {
  'note': new NotesWebApi.Note() // Note | 
};
apiInstance.notesPost(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **note** | [**Note**](Note.md)|  | [optional] 

### Return type

[**Note**](Note.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json


## updateNote

> updateNote(opts)



### Example

```javascript
import NotesWebApi from 'notes_web_api';

let apiInstance = new NotesWebApi.NoteApiApi();
let opts = {
  'note': new NotesWebApi.Note() // Note | 
};
apiInstance.updateNote(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **note** | [**Note**](Note.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json

