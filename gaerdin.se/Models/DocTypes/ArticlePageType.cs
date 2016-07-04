using gaerdin_se.Business.Definitions;
using NicBell.UCreate.Attributes;
using NicBell.UCreate.Constants;
using Umbraco.Core.Models;

namespace gaerdin_se.Models.DocTypes
{
    [DocType(Name = "Article",
        Icon = "icon-zip color-red",
        AllowedAsRoot = true,
        AllowedTemplates = new[] { "ArticlePage" },
        DefaultTemplate = "ArticlePage")]
    public class ArticlePageType : MasterPageType
    {
        public ArticlePageType(IPublishedContent content) : base(content)
        {
        }

        [Property(
            Alias = "pageHeading",
            TypeName = PropertyTypes.Textstring,
            Description = "",
            Mandatory = false,
            TabName = TabNames.Content)]
        public string PageHeading { get; set; }

        [Property(
            Alias = "pageBody",
            TypeName = PropertyTypes.Richtexteditor,
            Description = "",
            Mandatory = false,
            TabName = TabNames.Content)]
        public string PageBody { get; set; }
    }
}