package kadet.dnd.api

import kadet.dnd.api.model.ApiError
import org.springframework.web.bind.annotation.ControllerAdvice
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.ExceptionHandler

@ControllerAdvice
class GlobalExceptionHandler {

    @ExceptionHandler(Throwable::class)
    fun handleAllErrors(e: Throwable): ResponseEntity<ApiError> {
        return ResponseEntity(ApiError(e.toString()), HttpStatus.INTERNAL_SERVER_ERROR)
    }
}