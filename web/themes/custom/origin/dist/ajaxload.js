"use strict";!function(s,n){n.behaviors.ajaxListLoading={},n.behaviors.ajaxListLoading.xhr=null,n.behaviors.ajaxListLoading.ajaxContainer="",n.behaviors.ajaxListLoading.ajaxPath="",n.behaviors.ajaxListLoading.params="",n.behaviors.ajaxListLoading.filterForm=s(".filterform"),n.behaviors.ajaxListLoading.category=s(".filterform .category"),n.behaviors.ajaxListLoading.attach=function(a){var o=n.behaviors.ajaxListLoading;s(".ajax-list-container",a).once("ajaxListLoading").each(function(){o.ajaxContainer=s(this),o.ajaxPath=o.ajaxContainer.attr("data-ajax-path"),o.params=o.ajaxContainer.data("default-params"),""!==window.location.hash&&o.updateParamsFromHash(),o.displayList(o.ajaxContainer,o.ajaxPath,o.params),s(window).off("hashchange.form-fragment").on("hashchange",function(){o.updateParamsFromHash(),o.displayList(o.ajaxContainer,o.ajaxPath,o.params)})}),s(".pager.ajax a").off("click").on("click",function(a){a.preventDefault(),a.stopPropagation();var t=s(this).data("params"),i=o.getTopPosition(s(".ajax-list-container"));0<o.category.length&&(-1===(a=o.category.val()).indexOf("all")&&(t.category="field_category--"+a.replace(".term-",""))),o.xhr.abort(),window.history.pushState({params:JSON.stringify(t)},null,window.location),0<o.filterForm.length&&(i=o.getTopPosition(o.filterForm)),s("html,body").animate({scrollTop:i},"500"),s(".ajax-list-container .wrapper").fadeOut(function(){o.displayList(o.ajaxContainer,o.ajaxPath,t)})})},n.behaviors.ajaxListLoading.updateParamsFromHash=function(){var i=n.behaviors.ajaxListLoading,a=window.location.hash.substring(2).split("/");s.each(a,function(a,t){t=t.split("=");i.params[t[0]]=t[1]})},n.behaviors.ajaxListLoading.updateFilters=function(a){var t,i,o=n.behaviors.ajaxListLoading,e=s(".filterform .from-date"),r=s(".filterform .to-date");0<e.length&&0<r.length&&(t=(i=a.date.replace("field_date_range--","").split(","))[0].split("-"),i=i[1].split("-"),e.val(moment(Date.parse(t[1]+"-"+t[0]+"-"+t[2])).format("MMM D, YYYY")),r.val(moment(Date.parse(i[1]+"-"+i[0]+"-"+i[2])).format("MMM D, YYYY"))),0<o.category.length&&(i=void 0,i="all"!==a.category?".term-"+a.category.replace("field_category--",""):"all",o.category.val(i).blur().dropdown("update"))},n.behaviors.ajaxListLoading.displayList=function(i,a,t){var o=n.behaviors.ajaxListLoading;i.html("").removeClass("loaded"),o.updateFilters(t),o.xhr=s.ajax({type:"POST",url:a+"?response_type=ajax",data:t,success:function(a){var t=s("<div/>",{class:"wrapper"});t.html(a),i.html(t),i.addClass("loaded"),n.attachBehaviors()}})},n.behaviors.ajaxListLoading.getTopPosition=function(a){return a.offset().top-100}}(jQuery,Drupal);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFqYXhsb2FkLmpzIl0sIm5hbWVzIjpbIiQiLCJEcnVwYWwiLCJhamF4TG9hZFNjcmlwdCIsImJlaGF2aW9ycyIsImFqYXhMaXN0TG9hZGluZyIsInhociIsImFqYXhQYXRoIiwiYWpheENvbnRhaW5lciIsInBhcmFtcyIsImNhdGVnb3J5IiwiY29udGV4dCIsImF0dGFjaCIsIm9uY2UiLCJlYWNoIiwiYXR0ciIsIl9vYmoiLCJkYXRhIiwid2luZG93IiwibG9jYXRpb24iLCJoYXNoIiwidXBkYXRlUGFyYW1zRnJvbUhhc2giLCJkaXNwbGF5TGlzdCIsIm9mZiIsIm9uIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInRoaXMiLCJpbmRleE9mIiwibGVuZ3RoIiwidmFsIiwicmVwbGFjZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJmaWx0ZXJGb3JtIiwidG9wIiwiZ2V0VG9wUG9zaXRpb24iLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwiZmFkZU91dCIsImhhc2hBcnJheSIsImZyb21TZWxlY3QiLCJpbmRleCIsInZhbHVlIiwidmFsdWVBcnJheSIsInNwbGl0IiwiZGF0ZSIsInVwZGF0ZUZpbHRlcnMiLCJmcm9tIiwidG9TZWxlY3QiLCJ0byIsIm1vbWVudCIsIkRhdGUiLCJwYXJzZSIsImZvcm1hdCIsInJlbW92ZUNsYXNzIiwiJGNvbnRhaW5lciIsImh0bWwiLCJibHVyIiwiZHJvcGRvd24iLCIkcGF0aCIsIiRwYXJhbXMiLCJhamF4IiwidXJsIiwic3VjY2VzcyIsInJlc3VsdCIsIndyYXBwZXIiLCJjbGFzcyIsImFkZENsYXNzIiwiYXR0YWNoQmVoYXZpb3JzIiwiJGVsZW0iLCJvZmZzZXQiLCJqUXVlcnkiXSwibWFwcGluZ3MiOiJjQUFDLFNBQXlCQSxFQUFHQyxHQUE1QkEsRUFBU0MsVUFBQUEsZ0JBQTJCLEdBRWpDRCxFQUFPRSxVQUFVQyxnQkFBa0JDLElBQW5DLEtBQ0FKLEVBQU9FLFVBQVVDLGdCQUFnQkMsY0FBWSxHQUU3Q0osRUFBT0UsVUFBVUMs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cUIsUUFBQSxtQkFBQSxJQUVILE1BSXNCZixFQUFBTixTQUFTb0IsSUFBQXBCLEdBQUFnRCxPQUFBQyxTQUFBLFlBT3REekQsRUFBQUUsVUFBQUMsZ0JBQUFpQixZQUFBLFNBQUFrQyxFQUFBSSxFQUFBQyxHQUVBLElBQUE3QyxFQUFBZCxFQUFBRSxVQUFBQyxnQkFmUW1ELEVBQUFDLEtBQUEsSUFBQUYsWUFBQSxVQTBCRXZDLEVBQUNaLGNBQVVDLEdBQWpCVyxFQUFBVixJQUFBTCxFQUFBNkQsS0FBQSxDQU9NNUQsS0F4TFYsT0F5Slk2RCxJQUFLSCxFQUFNLHNCQUNYM0MsS0FBTTRDLEVBQ05HLFFBQVMsU0FBU0MsR0FFZCxJQUFJQyxFQUFVakUsRUFBRyxTQUFVLENBQUVrRSxNQUFTLFlBQ3RDRCxFQUFRVCxLQUFLUSxHQUNiVCxFQUFXQyxLQUFLUyxHQUNoQlYsRUFBV1ksU0FBUyxVQUNwQmxFLEVBQU9tRSxzQkFnQm5CbkUsRUFBT0UsVUFBVUMsZ0JBQWdCK0IsZUFBaUIsU0FBU2tDLEdBRXZELE9BQU9BLEVBQU1DLFNBQVNwQyxJQUFNLEtBbkxuQyxDQXdMQ3FDLE9BQVF0RSIsImZpbGUiOiJhamF4bG9hZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBhamF4TG9hZFNjcmlwdCAoJCwgRHJ1cGFsKSB7XHJcblxyXG4gICAgRHJ1cGFsLmJlaGF2aW9ycy5hamF4TGlzdExvYWRpbmcgPSB7fTtcclxuICAgIERydXBhbC5iZWhhdmlvcnMuYWpheExpc3RMb2FkaW5nLnhociA9IG51bGw7IC8vIGFqYXggY2FsbFxyXG4gICAgRHJ1cGFsLmJlaGF2aW9ycy5hamF4TGlzdExvYWRpbmcuYWpheENvbnRhaW5lciA9ICcnO1xyXG4gICAgRHJ1cGFsLmJlaGF2aW9ycy5hamF4TGlzdExvYWRpbmcuYWpheFBhdGggPSAnJztcclxuICAgIERydXBhbC5iZWhhdmlvcnMuYWpheExpc3RMb2FkaW5nLnBhcmFtcyA9ICcnO1xyXG4gICAgRHJ1cGFsLmJlaGF2aW9ycy5hamF4TGlzdExvYWRpbmcuZmlsdGVyRm9ybSA9ICQoJy5maWx0ZXJmb3JtJyk7XHJcbiAgICBEcnVwYWwuYmVoYXZpb3JzLmFqYXhMaXN0TG9hZGluZy5jYXRlZ29yeSA9ICQoIFwiLmZpbHRlcmZvcm0gLmNhdGVnb3J5XCIgKTtcclxuXHJcbiAgICBEcnVwYWwuYmVoYXZpb3JzLmFqYXhMaXN0TG9hZGluZy5hdHRhY2ggPSBmdW5jdGlvbiAoY29udGV4dCkge1xyXG5cclxuICAgICAgICBsZXQgX29iaiA9IERydXBhbC5iZWhhdmlvcnMuYWpheExpc3RMb2FkaW5nO1xyXG5cclxuICAgICAgICAkKCcuYWpheC1saXN0LWNvbnRhaW5lcicsIGNvbnRleHQpLm9uY2UoJ2FqYXhMaXN0TG9hZGluZycpLmVhY2goZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgX29iai5hamF4Q29udGFpbmVyID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgX29iai5hamF4UGF0aCA9IF9vYmouYWpheENvbnRhaW5lci5hdHRyKCdkYXRhLWFqYXgtcGF0aCcpO1xyXG4gICAgICAgICAgICBfb2JqLnBhcmFtcyA9IF9vYmouYWpheENvbnRhaW5lci5kYXRhKCdkZWZhdWx0LXBhcmFtcycpO1xyXG5cclxuICAgICAgICAgICAgLy8gSWYgaGFzaCBoYXMgYmVlbiBwcm92aWRlZCwgdXBkYXRlIHBhcmFtc1xyXG4gICAgICAgICAgICBpZih3aW5kb3cubG9jYXRpb24uaGFzaCAhPT0gJycpe1xyXG4gICAgICAgICAgICAgICAgX29iai51cGRhdGVQYXJhbXNGcm9tSGFzaCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBEaXNwbGF5IGxpc3RcclxuICAgICAgICAgICAgX29iai5kaXNwbGF5TGlzdChfb2JqLmFqYXhDb250YWluZXIsIF9vYmouYWpheFBhdGgsIF9vYmoucGFyYW1zKTtcclxuXHJcbiAgICAgICAgICAgIC8vIE9uIGhhc2ggY2hhbmdlLCB1cGRhdGUgcGFyYW1zLCByZWxvYWQgbGlzdFxyXG4gICAgICAgICAgICAkKHdpbmRvdykub2ZmKCdoYXNoY2hhbmdlLmZvcm0tZnJhZ21lbnQnKS5vbignaGFzaGNoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgX29iai51cGRhdGVQYXJhbXNGcm9tSGFzaCgpO1xyXG4gICAgICAgICAgICAgICAgX29iai5kaXNwbGF5TGlzdChfb2JqLmFqYXhDb250YWluZXIsIF9vYmouYWpheFBhdGgsIF9vYmoucGFyYW1zKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gQWpheCBwYWdlciBsaW5rc1xyXG4gICAgICAgICQoJy5wYWdlci5hamF4IGEnKS5vZmYoIFwiY2xpY2tcIiApLm9uKCAnY2xpY2snLCBmdW5jdGlvbihldmVudCl7XHJcblxyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBwYXJhbXMgPSAkKHRoaXMpLmRhdGEoJ3BhcmFtcycpO1xyXG4gICAgICAgICAgICBsZXQgdG9wID0gX29iai5nZXRUb3BQb3NpdGlvbigkKCcuYWpheC1saXN0LWNvbnRhaW5lcicpKTtcclxuXHJcbiAgICAgICAgICAgIGlmKF9vYmouY2F0ZWdvcnkubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2F0ZWdvcnkgPSBfb2JqLmNhdGVnb3J5LnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgaWYoY2F0ZWdvcnkuaW5kZXhPZignYWxsJykgPT09IC0xKXtcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbXMuY2F0ZWdvcnkgPSAnZmllbGRfY2F0ZWdvcnktLScrY2F0ZWdvcnkucmVwbGFjZSgnLnRlcm0tJywnJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIEFib3J0IGFueSBwb3NzaWJsZSBjdXJyZW50IGFqYXggY2FsbFxyXG4gICAgICAgICAgICBfb2JqLnhoci5hYm9ydCgpO1xyXG5cclxuICAgICAgICAgICAgLy8gU2V0IGhpc3Rvcnkgc3RhdGVcclxuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHtwYXJhbXM6SlNPTi5zdHJpbmdpZnkocGFyYW1zKX0sbnVsbCx3aW5kb3cubG9jYXRpb24pO1xyXG5cclxuICAgICAgICAgICAgLy8gR2V0IHRvcCBvZiBmaWx0ZXJzIGlmIHByZXNlbnRcclxuICAgICAgICAgICAgaWYoX29iai5maWx0ZXJGb3JtLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICAgICAgdG9wID0gX29iai5nZXRUb3BQb3NpdGlvbihfb2JqLmZpbHRlckZvcm0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBBbmltYXRlIHRvIHBvc2l0aW9uXHJcbiAgICAgICAgICAgICQoXCJodG1sLGJvZHlcIikuYW5pbWF0ZShcclxuICAgICAgICAgICAgICAgIHtzY3JvbGxUb3A6IHRvcH0sICc1MDAnKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEZhZGUgb3V0IHdyYXBwZXJcclxuICAgICAgICAgICAgJCgnLmFqYXgtbGlzdC1jb250YWluZXIgLndyYXBwZXInKS5mYWRlT3V0KCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgLy8gVHJpZ2dlciB0aGUgZGlzcGxheSBvZiB0aGUgbGlzdFxyXG4gICAgICAgICAgICAgICAgX29iai5kaXNwbGF5TGlzdChfb2JqLmFqYXhDb250YWluZXIsIF9vYmouYWpheFBhdGgsIHBhcmFtcyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgICQoJy5hamF4LWxpc3QtY29udGFpbmVyIC53cmFwcGVyJykuZmFkZU91dCggZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJC50cmltKFwiL2NhdGVnb3J5PVwiK3BhcmFtcy5jYXRlZ29yeStcIi9wYWdlZD1cIitwYXJhbXMucGFnZWQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgKi9cclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgRHJ1cGFsLmJlaGF2aW9ycy5hamF4TGlzdExvYWRpbmcudXBkYXRlUGFyYW1zRnJvbUhhc2ggPSBmdW5jdGlvbiAoKXtcclxuXHJcbiAgICAgICAgbGV0IF9vYmogPSBEcnVwYWwuYmVoYXZpb3JzLmFqYXhMaXN0TG9hZGluZztcclxuICAgICAgICBsZXQgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xyXG5cclxuICAgICAgICAvLyBTcGxpdCBoYXNoIGludG8gYXJyYXkgb2YgdmFsdWVzXHJcbiAgICAgICAgbGV0IGhhc2hBcnJheSA9IGhhc2guc3Vic3RyaW5nKDIpLnNwbGl0KCcvJyk7XHJcblxyXG4gICAgICAgICQuZWFjaChoYXNoQXJyYXksIGZ1bmN0aW9uKCBpbmRleCwgdmFsdWUgKSB7XHJcbiAgICAgICAgICAgIC8vIEZvciBlYWNoIHZhbHVlIHNwbGl0IGludG8ga2V5ID0+IHZhbHVlIGFycmF5XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZUFycmF5ID0gdmFsdWUuc3BsaXQoJz0nKTtcclxuICAgICAgICAgICAgLy8gQWRkL292ZXJyaWRlIGRlZmF1bHRQYXJhbXMgb2JqZWN0XHJcbiAgICAgICAgICAgIF9vYmoucGFyYW1zW3ZhbHVlQXJyYXlbMF1dID0gdmFsdWVBcnJheVsxXTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBEcnVwYWwuYmVoYXZpb3JzLmFqYXhMaXN0TG9hZGluZy51cGRhdGVGaWx0ZXJzID0gZnVuY3Rpb24gKHBhcmFtcyl7XHJcblxyXG4gICAgICAgIGxldCBfb2JqID0gRHJ1cGFsLmJlaGF2aW9ycy5hamF4TGlzdExvYWRpbmc7XHJcblxyXG4gICAgICAgIC8vIEhhbmRsZSBkYXRlIGlmIGV4aXN0c1xyXG4gICAgICAgIGxldCBmcm9tU2VsZWN0ID0gJCggXCIuZmlsdGVyZm9ybSAuZnJvbS1kYXRlXCIgKTtcclxuICAgICAgICBsZXQgdG9TZWxlY3QgPSAkKCBcIi5maWx0ZXJmb3JtIC50by1kYXRlXCIgKTtcclxuXHJcbiAgICAgICAgaWYoZnJvbVNlbGVjdC5sZW5ndGggPiAwICYmIHRvU2VsZWN0Lmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICBsZXQgZGF0ZSA9IHBhcmFtcy5kYXRlLnJlcGxhY2UoJ2ZpZWxkX2RhdGVfcmFuZ2UtLScsJycpLnNwbGl0KCcsJyk7XHJcbiAgICAgICAgICAgIGxldCBmcm9tID0gZGF0ZVswXS5zcGxpdCgnLScpO1xyXG4gICAgICAgICAgICBsZXQgdG8gPSBkYXRlWzFdLnNwbGl0KCctJyk7XHJcblxyXG4gICAgICAgICAgICAvLyBVcGRhdGVzIEZpbHRlcnMgVmFsdWUgb24gUGFnZVxyXG4gICAgICAgICAgICBmcm9tU2VsZWN0LnZhbChtb21lbnQoRGF0ZS5wYXJzZShmcm9tWzFdKyctJytmcm9tWzBdKyctJytmcm9tWzJdKSkuZm9ybWF0KCdNTU0gRCwgWVlZWScpKTtcclxuICAgICAgICAgICAgdG9TZWxlY3QudmFsKG1vbWVudChEYXRlLnBhcnNlKHRvWzFdKyctJyt0b1swXSsnLScrdG9bMl0pKS5mb3JtYXQoJ01NTSBELCBZWVlZJykpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC8vIEhhbmRsZSBjYXRlZ29yeSBpZiBleGlzdHNcclxuICAgICAgICBpZihfb2JqLmNhdGVnb3J5Lmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICBsZXQgY2F0ZWdvcnk7XHJcblxyXG4gICAgICAgICAgICBpZihwYXJhbXMuY2F0ZWdvcnkgIT09ICdhbGwnKXtcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5ID0gJy50ZXJtLScrcGFyYW1zLmNhdGVnb3J5LnJlcGxhY2UoJ2ZpZWxkX2NhdGVnb3J5LS0nLCcnKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeSA9ICdhbGwnO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBVcGRhdGVzIEZpbHRlcnMgVmFsdWUgb24gUGFnZVxyXG4gICAgICAgICAgICBfb2JqLmNhdGVnb3J5LnZhbChjYXRlZ29yeSkuYmx1cigpLmRyb3Bkb3duKFwidXBkYXRlXCIpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgRHJ1cGFsLmJlaGF2aW9ycy5hamF4TGlzdExvYWRpbmcuZGlzcGxheUxpc3QgPSBmdW5jdGlvbiAoICRjb250YWluZXIsICRwYXRoLCAkcGFyYW1zICl7XHJcblxyXG4gICAgICAgIGxldCBfb2JqID0gRHJ1cGFsLmJlaGF2aW9ycy5hamF4TGlzdExvYWRpbmc7XHJcblxyXG4gICAgICAgIC8vIEhhbmRsZSBjbGFzcyBmb3IgbG9hZGluZyBpY29uXHJcbiAgICAgICAgJGNvbnRhaW5lci5odG1sKCcnKS5yZW1vdmVDbGFzcygnbG9hZGVkJyk7XHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSBGaWx0ZXJzXHJcbiAgICAgICAgX29iai51cGRhdGVGaWx0ZXJzKCRwYXJhbXMpO1xyXG5cclxuICAgICAgICBfb2JqLnhociA9ICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgdXJsOiAkcGF0aCsnP3Jlc3BvbnNlX3R5cGU9YWpheCcsXHJcbiAgICAgICAgICAgIGRhdGE6ICRwYXJhbXMsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCB3cmFwcGVyID0gJCggXCI8ZGl2Lz5cIiwgeyAnY2xhc3MnOiAnd3JhcHBlcid9KTtcclxuICAgICAgICAgICAgICAgIHdyYXBwZXIuaHRtbChyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgJGNvbnRhaW5lci5odG1sKHdyYXBwZXIpO1xyXG4gICAgICAgICAgICAgICAgJGNvbnRhaW5lci5hZGRDbGFzcygnbG9hZGVkJyk7XHJcbiAgICAgICAgICAgICAgICBEcnVwYWwuYXR0YWNoQmVoYXZpb3JzKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCRwYXRoKyc/cmVzcG9uc2VfdHlwZT1hamF4Jyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygkcGFyYW1zKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAqL1xyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9O1xyXG5cclxuXHJcblxyXG4gICAgRHJ1cGFsLmJlaGF2aW9ycy5hamF4TGlzdExvYWRpbmcuZ2V0VG9wUG9zaXRpb24gPSBmdW5jdGlvbigkZWxlbSl7XHJcblxyXG4gICAgICAgIHJldHVybiAkZWxlbS5vZmZzZXQoKS50b3AgLSAxMDA7XHJcbiAgICB9O1xyXG5cclxuXHJcblxyXG59KGpRdWVyeSwgRHJ1cGFsKSk7Il19
