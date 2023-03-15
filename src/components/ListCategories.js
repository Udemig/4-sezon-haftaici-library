import React from "react";

import { useSelector } from "react-redux";

const ListCategories = () => {
  const { categoriesState, booksState } = useSelector((state) => state);
  console.log(categoriesState);
  return (
    <div>
      {categoriesState.categories.length === 0 && (
        <div className="my-5 d-flex justify-content-center">
          <div className="alert alert-warning text-center w-75" role="alert">
            Sistemde gösterilecek kategori kaydı yok.
          </div>
        </div>
      )}
      {categoriesState.categories.length > 0 && (
        <table className={`table table-striped table-light`}>
          <thead>
            <tr>
              <th scope="col">Sıra No</th>
              <th scope="col">Kategori Adı</th>
              <th scope="col">Kitap Sayısı</th>
              <th scope="col">İşlemler</th>
            </tr>
          </thead>
          <tbody>
            {categoriesState.categories.map((category, index) => {
              var siraNo = index + 1;
              /* const myBooks = booksState.books.filter(
                (item) => item.categoryId === category.id
              ); */
              const myBooks=[]
              for(let i=0;i<booksState.books.length;i++){
                if(booksState.books[i].categoryId === category.id){
                    myBooks.push(booksState.books[i])
                }
              }
              return (
                <tr key={category.id}>
                  <th>{siraNo}</th>
                  <td>{category.name}</td>
                  <td>{myBooks.length}</td>
                  <td>
                    <div className="btn-group">
                      <button type="button" className="btn btn-danger btn-sm">
                        Sil
                      </button>
                      <button type="button" className="btn btn-warning btn-sm">
                        Güncelle
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ListCategories;
