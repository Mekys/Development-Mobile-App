using Application.Common;
using Domain.Model.DTO;

namespace Application.Repository
{
    public interface IAlbumRepository
    {
        Task<OperationResult<IEnumerable<PhotosDTO>>> GetPhotosByAlbum(Guid albumId);
        Task<OperationResult<IEnumerable<PhotosDTO>>> GetPhotosByAlbum(Guid albumId);
    }
}
