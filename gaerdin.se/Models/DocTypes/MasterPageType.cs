using gaerdin_se.Business.Definitions;
using NicBell.UCreate.Attributes;
using NicBell.UCreate.Constants;
using NicBell.UCreate.Models;
using Umbraco.Core.Models;

namespace gaerdin_se.Models.DocTypes
{
    [DocType(
        Name = "Masterpage",
        Icon = "icon-zip color-blue",
        AllowedAsRoot = true)]
    public class MasterPageType : BaseDocType
    {
        public MasterPageType(IPublishedContent content) : base(content)
        {
        }
        
        [Property(
            Alias = "pageDescription", 
            TypeName = PropertyTypes.Textarea, 
            Description = "", 
            Mandatory = true, 
            TabName = TabNames.Meta)]
        public string PageDescription { get; set; }
    }
}