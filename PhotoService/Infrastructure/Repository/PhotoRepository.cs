using Application.Common;
using Application.Repository;
using Domain.Model.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Repository
{
    public class PhotoRepository : IPhotoRepository
    {
        public Task<OperationResult<string>> AddPhoto(Guid albumId, Stream photo)
        {
            throw new NotImplementedException();
        }

        public Task<OperationResult<bool>> DeletePhoto(Guid albumId, Guid photoId)
        {
            throw new NotImplementedException();
        }

        public Task<OperationResult<PhotosDTO>> GetPhotosByAlbum(Guid albumId)
        {
            throw new NotImplementedException();
        }
    }
}
