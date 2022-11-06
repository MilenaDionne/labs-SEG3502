package seg3102.booksrestapi.repository

import org.springframework.data.repository.CrudRepository
import seg3102.booksrestapi.entities.Bio

interface BioRepository: CrudRepository<Bio, Long>
