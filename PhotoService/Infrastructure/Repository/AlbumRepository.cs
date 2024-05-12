using Application.Common;
using Application.Repository;
using Domain.Model.DTO;
using Domain.Model.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Repository
{
    public class AlbumRepository : IAlbumRepository
    {
        public Task<OperationResult<Guid>> CreateAlbum(Guid eventId)
        {
            throw new NotImplementedException();
        }

        public Task<OperationResult<bool>> DeleteAlbum(Guid albumId)
        {
            throw new NotImplementedException();
        }

        public Task<OperationResult<IEnumerable<Album>>> GetAlbumsBy(Expression<Func<Album, bool>> predicate)
        {
            throw new NotImplementedException();
        }

        public Task<OperationResult<Album>> UpdateAlbum(Guid albumId, AlbumDTO newValue)
        {
            throw new NotImplementedException();
        }
    }
}
