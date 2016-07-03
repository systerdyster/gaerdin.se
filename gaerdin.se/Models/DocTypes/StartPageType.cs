using NicBell.UCreate.Attributes;
using Umbraco.Core.Models;

namespace gaerdin_se.Models.DocTypes
{
    [DocType(Name = "Start",
        Icon = "icon-zip color-blue",
        AllowedAsRoot = true,
        AllowedTemplates = new[] { "StartPage" },
        DefaultTemplate = "StartPage")]
    public class StartPageType : MasterPageType
    {
        public StartPageType(IPublishedContent content) : base(content)
        {
        }
    }
}