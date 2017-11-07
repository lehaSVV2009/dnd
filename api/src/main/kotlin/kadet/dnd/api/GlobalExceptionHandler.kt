package kadet.dnd.api

import org.springframework.web.bind.annotation.ControllerAdvice
import org.springframework.http.HttpStatus
import org.springframework.hateoas.VndErrors
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.ExceptionHandler

@ControllerAdvice
class GlobalExceptionHandler {

    @ExceptionHandler(Throwable::class)
    fun handleAllErrors(e: Throwable): ResponseEntity<VndErrors> {
        return ResponseEntity(VndErrors("any", e.toString()), HttpStatus.INTERNAL_SERVER_ERROR)
    }
}