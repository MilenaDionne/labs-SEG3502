package seg3102.booksrestapi.repository

import org.springframework.data.repository.CrudRepository
import seg3102.booksrestapi.entities.Book

interface BookRepository: CrudRepository<Book, Long>
