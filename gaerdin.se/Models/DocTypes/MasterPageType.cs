using NicBell.UCreate.Attributes;
using NicBell.UCreate.Models;
using Umbraco.Core.Models;

namespace gaerdin_se.Models.DocTypes
{
    [DocType(Name = "Masterpage",
        Icon = "icon-zip color-blue",
        AllowedAsRoot = true)]
    public class MasterPageType : BaseDocType
    {
        public MasterPageType(IPublishedContent content) : base(content)
        {
        }
    }
}