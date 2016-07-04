using System;
using gaerdin_se.Business.Definitions;
using NicBell.UCreate.Attributes;
using NicBell.UCreate.Constants;
using Umbraco.Core.Models;

namespace gaerdin_se.Models.DocTypes
{
    [DocType(Name = "Archive",
        Icon = "icon-zip color-green",
        AllowedAsRoot = true,
        AllowedTemplates = new[] { "ArchivePage" },
        DefaultTemplate = "ArchivePage",
        AllowedChildTypes = new Type[] { typeof(ArticlePageType) })]
    public class ArchivePageType : MasterPageType
    {
        public ArchivePageType(IPublishedContent content) : base(content)
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