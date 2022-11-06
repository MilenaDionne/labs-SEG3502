package seg3102.tempconverterapi.controller

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("calculator")
class ConverterController {
    @GetMapping("/add/{nombre1}/{nombre2}")
    fun getAddition(@PathVariable nombre1: Double, @PathVariable nombre2: Double) = nombre1 + nombre2;

    @GetMapping("/subtract/{nombre1}/{nombre2}")
    fun getSubtraction(@PathVariable nombre1: Double, @PathVariable nombre2: Double) = nombre1 - nombre2;

    @GetMapping("/multiply/{nombre1}/{nombre2}")
    fun getMultiplication(@PathVariable nombre1: Double, @PathVariable nombre2: Double) = nombre1 * nombre2;

    @GetMapping("/division/{nombre1}/{nombre2}")
    fun getDivision(@PathVariable nombre1: Double, @PathVariable nombre2: Double) = nombre1 / nombre2;

}
